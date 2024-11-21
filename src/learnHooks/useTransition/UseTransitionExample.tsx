import { useState } from 'react';
import TabButton from './TabButton';
import AboutTab from './AboutTab';
import PostsTab from './PostsTab';
import ContactTab from './ContactTab';

export default function UseTransitionExample() {
  const [tab, setTab] = useState('about');
  return (
    <div className='app'>
      <TabButton
        isActive={tab === 'about'}
        onClick={() => setTab('about')}
      >
        About
      </TabButton>
      <TabButton
        isActive={tab === 'posts'}
        onClick={() => setTab('posts')}
      >
        Posts (slow)
      </TabButton>
      <TabButton
        isActive={tab === 'contact'}
        onClick={() => setTab('contact')}
      >
        Contact
      </TabButton>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </div>
  );
}
