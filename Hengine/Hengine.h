#pragma once

#include "Display.h"

class Hengine
{
public:
	Hengine();
	~Hengine();

	void start();

private:
	bool _running;

	Display* _display;

	void run();
	void pause();
	void stop();
};

