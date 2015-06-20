#include "Hengine.h"



Hengine::Hengine()
{
	_display = new  Display(800, 600, "Hengine");
}

Hengine::~Hengine()
{
	delete _display;
}

void Hengine::start()
{
	_running = true;
	run();
}

void Hengine::pause()
{
	//TODO: Implement pausing the engine execution for debugging purposes.
}

void Hengine::stop()
{
	_running = false;
}

void Hengine::run()
{
	//Get the gl context for the current thread
	_display->getGLContext();
	_display->setClearColor(0.5f, 0.5f, 0.5f);

	while (_running)
	{
		_display->update();

		//Exit engine execution
		if (_display->isCloseRequested())
			stop();
	}
}