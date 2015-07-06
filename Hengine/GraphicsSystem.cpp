#include "GraphicsSystem.h"

GraphicsSystem::GraphicsSystem()
{
	
}

GraphicsSystem::~GraphicsSystem()
{
	if (_display == nullptr)
		delete _display;
}

void GraphicsSystem::init(int width, int height, string title)
{
	_display = new Display(width, height, title);
}

void GraphicsSystem::sync()
{

}

void GraphicsSystem::run()
{
	//Get the gl context for the current thread
	_display->getGLContext();

	glClearColor(0.5f, 0.5f, 0.5f, 1);
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
}

Display* GraphicsSystem::getDisplay()
{
	return _display;
}