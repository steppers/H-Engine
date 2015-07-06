#pragma once

#include "TaskThread.h"

using namespace std;

class ThreadPool
{
public:
	ThreadPool(int numThreads);
	~ThreadPool();

	TaskThread* getAvailableThread();
	void waitForCurrentTaskCompletion();

private:
	TaskThread* _threads = nullptr;
	int _numThreads = 0;
};

