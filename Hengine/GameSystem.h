#pragma once

#include "System.h"

class GameSystem : System
{
public:
	GameSystem();
	~GameSystem();

	void init();
	void sync();

	void run();
};

