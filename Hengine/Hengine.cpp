#include "Hengine.h"

Hengine::Hengine()
{
	_sys_input.init();
	_sys_graphics.init(800, 600, "Hengine");

	_display = _sys_graphics.getDisplay();
}

Hengine::~Hengine()
{
	
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

	while (_running)
	{
		//Execute the systems
		_scheduler.addToSchedule((Runnable*)&_sys_input);
		_scheduler.addToSchedule((Runnable*)&_sys_graphics);
		_scheduler.executeSchedule();

		//Syncronise the necessary systems

		_display->update();

		//Exit engine execution
		if (_display->isCloseRequested())
			stop();
	}
}