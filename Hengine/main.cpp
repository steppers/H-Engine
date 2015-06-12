#include "Display.h"

int main(void)
{
	Display display(800, 600, "Hengine");
	display.getGLContext();
	display.setClearColor(1, 0, 0);

	while (!display.isCloseRequested())
	{
		display.update();
	}

	return 0;
}