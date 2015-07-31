#pragma once

#include <iostream>

using namespace std;

template <class T>
struct Element;

template <class T>
class SharedDataObject
{
public:
	SharedDataObject(T* data)
	{
		head = new Element<T>;
		head->sharedData = this;
		head->data = data;
		tail = head;
	}
	~SharedDataObject() {};

	void linkData(T* data)
	{
		Element<T>* e = new Element<T>;
		e->sharedData = this;
		e->data = data;
		tail->next = e;
		tail = e;
	}

	void unlinkData(T* data)
	{
		Element<T>* t = head;

		if (t->data == data)
		{
			cerr << "ERROR: (SharedData) Cannot unlink master data." << endl;
			exit(-1);
		}

		while (t->next != nullptr)
		{
			if (t->next->data == data)
			{
				Element<T>* tmp = t->next;
				t->next = tmp->next;

				if (tmp == tail)
					tail = t;

				delete tmp;
				return;
			}
			t = t->next;
		}
	}

private:
	Element<T>* head = nullptr;
	Element<T>* tail = nullptr;
};

template <class T>
struct Element
{
	Element<T>* next;
	SharedDataObject* sharedData;
	T* data;
};