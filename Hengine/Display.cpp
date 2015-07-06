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

	setVSync(true);
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
	glfwSwapBuffers(_window);
	glfwPollEvents();
}

void Display::setVSync(bool vsync)
{
	if (vsync)
		glfwSwapInterval(1);
	else
		glfwSwapInterval(0);
}

bool Display::isCloseRequested()
{
	return glfwWindowShouldClose(_window);
}
