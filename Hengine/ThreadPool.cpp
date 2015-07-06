#include "ThreadPool.h"



ThreadPool::ThreadPool(int numThreads)
{
	_numThreads = numThreads;
	_threads = new TaskThread[numThreads];

	//Set thread IDs?
}


ThreadPool::~ThreadPool()
{
	for (int i = 0; i < _numThreads; i++)
	{
		_threads[i].stop();
	}
	delete[] _threads;
}

TaskThread* ThreadPool::getAvailableThread()
{
	for (int i = 0; i < _numThreads; i++)
	{
		if (_threads[i].isAvailable())
			return &_threads[i];
	}
	return nullptr;
}

void ThreadPool::waitForCurrentTaskCompletion()
{
	int i = 0;
	for (i = 0; i < _numThreads; i++)
	{
		if (!_threads[i].isAvailable())
			i = -1;
	}
}