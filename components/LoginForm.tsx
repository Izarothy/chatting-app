import { changeCurrentMember } from 'lib/currentMemberSlice';
import { useAppSelector } from 'lib/hooks';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

type Inputs = {
  memberName: string;
  password: string;
};
const LoginForm = () => {
  const [error, setError] = useState('');
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const dispatch = useDispatch();
  const currentMember = useAppSelector((state) => state.currentMember.value);

  const addUser = async (data: Inputs) => {
    if (!data.memberName || !data.password)
      return setError('Username and password are required');

    if (error) setError('');

    const res = await fetch('api/addMember', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        memberName: data.memberName,
        password: data.password,
      }),
    });

    if (!res.ok || !res) return setError('There was an error while logging in');
    const returnedMember = await res.json();
    dispatch(changeCurrentMember(returnedMember.memberAdded));
  };
  return (
    <>
      {error && (
        <div className="text-red-700 text-xl text-center bg-primary-dark">
          {error}
        </div>
      )}
      <main className="grid place-items-center h-screen w-screen bg-primary-dark text-gray-100">
        <form onSubmit={handleSubmit(addUser)} className="flex flex-col gap-8">
          <input
            type="text"
            {...register('memberName')}
            placeholder="Your name"
            className="placeholder:text-gray-600 text-primary-dark p-2 rounded-md"
          />
          <input
            type="password"
            {...register('password')}
            placeholder="Password"
            className="placeholder:text-gray-600 text-primary-dark p-2 rounded-md"
          />

          <input
            type="submit"
            value="Log in"
            className="bg-blue-500 rounded-md py-1 cursor-pointer"
          />
        </form>
      </main>
    </>
  );
};

export default LoginForm;
