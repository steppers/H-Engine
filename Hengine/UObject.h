#pragma once

class UObject
{
public:
	UObject();
	~UObject();

	template <class T>
	bool createSharedData();
};