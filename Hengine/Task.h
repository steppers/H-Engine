#pragma once



typedef void(System::*T_Pointer)();

class Task
{
public:
	Task();
	~Task();

	void setTask(T_Pointer pointer) { _pointer = pointer; }
	T_Pointer getTaskFunction() { return _pointer; }

private:
	T_Pointer _pointer;
};

