#pragma once

#include "System.h"
#include "Display.h"
#include "GameSystem.h"

#include <string>
#include <GLFW\glfw3.h>

class GraphicsSystem : public System
{
public:
	GraphicsSystem();
	~GraphicsSystem();

	void init(int width, int height, string title);

	void run();

	Display* getDisplay();

private:
	Display* _display;
};

