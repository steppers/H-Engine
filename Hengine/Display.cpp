#include "Display.h"

Display::Display(int width, int height, string title)
{
	_valid = false;
	if (!glfwInit())
		return;

	_window = glfwCreateWindow(width, height, title.c_str(), NULL, NULL);
	if (!_window)
	{
		return;
	}

	_valid = true;
}

Display::~Display()
{
	glfwDestroyWindow(_window);
	glfwTerminate();
}

void Display::getGLContext()
{
	glfwMakeContextCurrent(_window);
}

void Display::setClearColor(float r, float g, float b)
{
	glClearColor(r, g, b, 1);
}

void Display::update()
{
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
	glfwSwapBuffers(_window);
	glfwPollEvents();
}

bool Display::isCloseRequested()
{
	return glfwWindowShouldClose(_window);
}
