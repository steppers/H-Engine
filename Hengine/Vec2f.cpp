#include "Vec2f.h"

Vec2f::Vec2f()
{
	_x = 0;
	_y = 0;
}

Vec2f::Vec2f(float x, float y)
{
	_x = x;
	_y = y;
}

Vec2f::Vec2f(Vec2f* other)
{
	_x = other->getX();
	_y = other->getY();
}

Vec2f* Vec2f::add(Vec2f* other)
{
	_x += other->getX();
	_y += other->getY();
	return this;
}

Vec2f* Vec2f::sub(Vec2f* other)
{
	_x -= other->getX();
	_y -= other->getY();
	return this;
}

Vec2f* Vec2f::mul(float val)
{
	_x *= val;
	_y *= val;
	return this;
}

float Vec2f::lengthSquared()
{
	return _x*_x + _y*_y;
}

float Vec2f::length()
{
	return sqrtf(lengthSquared());
}

Vec2f* Vec2f::normalise()
{
	float l = length();
	_x /= l;
	_y /= l;
	return this;
}

float Vec2f::getX()
{
	return _x;
}

float Vec2f::getY()
{
	return _y;
}

void Vec2f::setX(float x)
{
	_x = x;
}

void Vec2f::setY(float y)
{
	_y = y;
}

void Vec2f::set(float x, float y)
{
	_x = x;
	_y = y;
}

void Vec2f::set(Vec2f* other)
{
	_x = other->getX();
	_y = other->getY();
}