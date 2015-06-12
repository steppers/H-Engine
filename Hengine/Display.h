#pragma once

#include <string>
#include <GLFW\glfw3.h>

using namespace std;

class Display
{
public:
	Display(int width, int height, string title);
	~Display();

	void setSize(int width, int height);
	void setTitle(string* text);
	void setFullscreen(bool val);
	void setVSync(bool val);
	
	int getWidth();
	int getHeight();

	bool isCloseRequested();
	bool isFullscreen();
	bool isVSyncEnabled();

	void getGLContext();
	void setClearColor(float r, float g, float b);
	void update();

private:
	GLFWwindow* _window;

	int _width, _height;
	bool _fullscreen, _vsync, _valid;
};

