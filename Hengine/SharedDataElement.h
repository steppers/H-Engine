#pragma once

template <class T>
class SharedDataElement
{
public:
	T* data;
	SharedDataElement* next;
};