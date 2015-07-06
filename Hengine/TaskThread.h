#pragma once

#include <thread>
#include <mutex>
#include <condition_variable>

#include "Runnable.h"

using namespace std;

class TaskThread
{
public:
	TaskThread();
	~TaskThread();

	bool isRunning() { return _running; }
	void setRunnable(Runnable* r);

	bool isAvailable() { return _runnable == nullptr; }
	void stop();

private:
	bool _running = true;

	thread* _thread;
	Runnable* _runnable = nullptr;

	mutex _mtx;
	condition_variable _cv;

	void loop();
	void notify();
};
