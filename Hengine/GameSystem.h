#pragma once

#include "System.h"

class GameSystem : System
{
public:
	GameSystem();
	~GameSystem();

	void init(double* deltaPtr);
	void sync();

	void run();

private:
	double* _deltaPtr;
};

