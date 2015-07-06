#pragma once

#include "ThreadPool.h"
#include "TaskThread.h"
#include "Runnable.h"

#include <queue>

class Scheduler
{
public:
	Scheduler();
	~Scheduler();

	void addToSchedule(Runnable* r);
	void executeSchedule();

private:
	ThreadPool* _pool;
	
	queue<Runnable*> _tasks;
};

