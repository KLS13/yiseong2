const user = {name : 'yiseong', age : 31};
console.log('user : ' , user);
console.log('user.name :', user.name);
console.log('user.age :', user.age);

user.job = 'developer'; // 기존 user 오브젝트는 'job'이라는 필드가 없음.
                        // 하지만 필드를 추가해주면서 값도 같이 넣어줄 수 있다.
user.nation = 'korea';
console.log(user);


const memberName = 'age'; // string 형태인 경우
console.log(user[memberName]);
console.log(user['name']); // 이름만 뽑기

