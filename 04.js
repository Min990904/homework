// 문제 2번의 사자 객체를 가져옵니다.
// const lion = { ... }
const lion = {
    name : "심바",
    age : 3,
    주인공 : "true",
    대사 : "하쿠나마타타",
};
console.log(typeof lion);
// 나이를 추가하는 함수입니다.
function incrementAge(lion) {
    const Age = lion.age + 1;
    return Age;
}
  
  // 함수 실행 이후 사자의 현재 나이를 출력합니다.
  console.log(incrementAge(lion))