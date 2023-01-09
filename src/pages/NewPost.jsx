import { useState } from 'react';
import { redirect, useNavigate, useNavigation } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const navigation = useNavigation();

  console.log('navigation', navigation.state);

  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      <NewPostForm onCancel={cancelHandler} submitting={navigation.state === 'submitting'} />
    </>
  );
}

export default NewPostPage;

export async function action({ request }) {
  const formData = await request.formData();
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text'),
  };
  try {
    await savePost(post);
  } catch (err) {
    if (err.status === 422) {
      throw err;
    }
    throw err;
  }

  return redirect('/blog');
}
