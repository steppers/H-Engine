#pragma once

#include "SharedDataElement.h"

#include <iostream>
using namespace std;

template <class T>
class SharedData
{
public:
	SharedData()
	{
		head = nullptr;
		tail = nullptr;
	}
	~SharedData() {}

	//Adds a new element to the list
	void linkData(T* data)
	{
		//Create the new list element
		SharedDataElement<T>* tmp = new SharedDataElement<T>();
		tmp->data = data;
		tmp->next = nullptr;


		if (head == nullptr)
			head = tmp;			//If the head does not exist yet, create it.
		else
			tail->next = tmp;	//add the new element to the current list.

		tail = tmp;				//Set the tail as the new element.
	}

	//Removes an element from the list
	void unlinkData(T* data)
	{
		if (head == nullptr)
			cerr << "ERROR: (SharedData) Cannot unlink data, no data previously linked" << endl;

		SharedDataElement<T>* prev = nullptr;
		SharedDataElement<T>* curr = head;

		while (curr != nullptr)
		{
			if (curr->data == data)
			{
				if (prev == nullptr)
				{
					head = curr->next;
				}
				else
				{
					prev->next = curr->next;
				}
				delete curr;
				return;
			}
			prev = curr;
			curr = curr->next;
		}
	}

private:
	SharedDataElement<T>* head = nullptr;
	SharedDataElement<T>* tail = nullptr;
};

