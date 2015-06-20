#pragma once

#include "UObject.h"

class UScene
{
public:
	UScene();
	~UScene();

	void setRoot(UObject* root);
	UObject* getRoot();

protected:
	UObject* root;
};

