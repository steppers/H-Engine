#include "Scheduler.h"

Scheduler::Scheduler()
{
	_pool = new ThreadPool(thread::hardware_concurrency());
}

Scheduler::~Scheduler()
{
	delete _pool;
}

void Scheduler::addToSchedule(Runnable* r)
{
	_tasks.push(r);
}

void Scheduler::executeSchedule()
{
	TaskThread* t;
	while (!_tasks.empty())
	{
		t = _pool->getAvailableThread();
		if (t != nullptr)
		{
			t->setRunnable(_tasks.front());
			_tasks.pop();
		}
	}

	//Wait for all tasks to finish
	_pool->waitForCurrentTaskCompletion();
}