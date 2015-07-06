#pragma once

#include <cmath>

class Vec2f
{
public:
	Vec2f();
	Vec2f(float x, float y);
	Vec2f(Vec2f* other);
	
	Vec2f* add(Vec2f* other);
	Vec2f* sub(Vec2f* other);
	Vec2f* mul(float val);

	float lengthSquared();
	float length();
	Vec2f* normalise();

	float dot(Vec2f* other);

	float getX();
	float getY();

	void setX(float x);
	void setY(float y);
	void set(float x, float y);
	void set(Vec2f* other);

private:
	float _x, _y;
};

