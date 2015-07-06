#include "Hengine.h"

Hengine::Hengine()
{
	_sys_input.init();
	_sys_graphics.init(800, 600, "Hengine");
	_sys_game.init(&_delta);

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
	_time.setTime(0);
	_lastTime = 0;

	double frameTime = 1.0 / 60.0;

	while (_running)
	{
		_currTime = _time.getTime();
		_delta = _currTime - _lastTime;
		_lastTime = _currTime;

		if (_delta < frameTime)
			this_thread::sleep_for(chrono::microseconds((int)((frameTime - _delta) * 1000000)));
		_delta = frameTime;

		//Execute the systems
		_scheduler.addToSchedule((Runnable*)&_sys_input);
		_scheduler.addToSchedule((Runnable*)&_sys_graphics);
		_scheduler.addToSchedule((Runnable*)&_sys_game);
		_scheduler.executeSchedule();

		//Syncronise the necessary systems here

		_display->update();

		//Exit engine execution
		if (_display->isCloseRequested())
			stop();

		_fps++;
		_frmTime += _delta;
		if (_frmTime > 1)
		{
			printf("FPS: %d\n", _fps);
			_frmTime = 0;
			_fps = 0;
		}
	}
}