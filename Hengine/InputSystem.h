#pragma once

#include "System.h"

#include <iostream>
using namespace std;

class InputSystem : public System
{
public:
	InputSystem();
	~InputSystem();

	void init();
	void sync();

	void run();
};