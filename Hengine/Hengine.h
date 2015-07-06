#pragma once

#include "Display.h"

#include "InputSystem.h"
#include "GraphicsSystem.h"
#include "Scheduler.h"

class Hengine
{
public:
	Hengine();
	~Hengine();

	void start();

private:
	bool _running;

	Display* _display;

	InputSystem _sys_input;
	GraphicsSystem _sys_graphics;

	Scheduler _scheduler;

	void run();
	void pause();
	void stop();
};

