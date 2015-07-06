#pragma once

#include <GLFW\glfw3.h>

class Time
{
public:
	void setTime(double time)
	{
		glfwSetTime(time);
	}

	double getTime()
	{
		return glfwGetTime();
	}
};