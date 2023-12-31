import React, { useRef, useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUsers = ({ onAddUser }) => {
  // 에러 상태 관라
  const [error, setError] = useState(null);

  //input dom 가져오기
  const nameInput = useRef();
  const ageInput = useRef();

  const userSubmitHandler = (e) => {
    e.preventDefault();

    console.log(nameInput.current);

    const username = nameInput.current.value;
    const age = ageInput.current.value;

    if (username.trim() === '' || age.trim() === '') {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값은 공백으로 작성하면 안됩니다!',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이는 1 이상의 숫자로 작성해 주세요!',
      });
      return;
    }

    onAddUser({ username, age });

    nameInput.current.value = '';
    ageInput.current.value = '';
  };

  return (
    // React.Fragment
    <>
      {error && ( //&&(논리연산자) 좌항과 우항이 모두 true여야만 true가 됨.
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)} // 모달이 더 이상 화면에 노출이 안됨.
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor='username'>이름</label>
          <input
            id='username'
            type='text'
            ref={nameInput} //기억
          />
          <label htmlFor='age'>나이</label>
          <input
            id='age'
            type='number'
            ref={ageInput} //기억
          />
          <Button type='submit'>가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
