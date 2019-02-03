#include <iostream>
using namespace std;

int c=-1;
void Qsort(int list[],int p,int q )
{
	int i = p;
	int j = q;
	int x = list[i];
	if (p>q)
	{
		return;
	}
	while (i!=j)
	{
		while (i<j&&list[j]>=x)
		{
			j--;
		}
		while (i<j&&list[i]<=x)
		{
			i++;
		}
		if (i<j)
		{
			int temp=list[i];
			list[i] = list[j];
			list[j] = temp;
		}
	}
	list[p] = list[i];
	list[i] = x;
	if (c==-1)
	{
		c = i;
	}
	Qsort(list, p, i - 1);
	Qsort(list, i + 1, q);
	return;
}
int main()
{
	int list[100];
	int n;
	cin >> n;
	for (int i = 0; i < n; i++)
	{
		cin >> list[i];
	}
	Qsort(list, 0, n - 1);
	cout << c+1<<" ";
	for (int i = 0; i < n; i++)
	{
		cout << list[i] << " ";
	}
	return 0;
}


