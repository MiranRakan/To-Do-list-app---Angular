#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;
int main(){

vector<int> nums= {3, 7, 4, 2, 5, 6,9};

int target = 1; 
// 11 - 3 = 8; 


unordered_map<int, int> map ; 

for(int i = 0 ; i<nums.size();i++){

    int complete = target - nums[i];

    if(map.find(complete)!= map.end()){
        cout<< "indecies  "<<  map[complete] <<" "<< i <<endl ; 
        return 0 ; 
    }

    map[nums[i]]= i;

}

cout<<"No num";

    return 0;
}