#pragma once

#include <iostream>
#include <chrono>
#include <thread>

#include "Display.h"

#include "Util.h"

#include "InputSystem.h"
#include "GraphicsSystem.h"
#include "GameSystem.h"
#include "Scheduler.h"

using namespace std;

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
	GameSystem _sys_game;

	Scheduler _scheduler;

	Time _time;
	double _delta;
	double _currTime;
	double _lastTime;

	int _fps;
	double _frmTime;

	void run();
	void pause();
	void stop();
};

