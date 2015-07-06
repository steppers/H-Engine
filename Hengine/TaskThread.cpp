#include "TaskThread.h"

TaskThread::TaskThread()
{
	_thread = new thread(&TaskThread::loop, this);
}

TaskThread::~TaskThread()
{
	delete _thread;
}

void TaskThread::stop()
{
	_runnable = nullptr;
	_running = false;
	notify();
	_thread->join();
}

void TaskThread::setRunnable(Runnable* r)
{
	_runnable = r;
	if (r != nullptr)
	{
		notify();
	}
}

void TaskThread::loop()
{
	unique_lock<mutex> lk(_mtx);
	while (_running)
	{
		_cv.wait(lk);

		if (_runnable != nullptr)
		{
			_runnable->run();
			_runnable = nullptr;
		}	
	}
}

void TaskThread::notify()
{
	lock_guard<mutex> lk(_mtx);
	_cv.notify_all();
}