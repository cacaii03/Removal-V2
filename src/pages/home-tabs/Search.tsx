import React, { useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';

const songs = [
  'Twinkle Twinkle Little Star',
  'Happy Birthday',
  'Mary Had a Little Lamb',
  'Let It Go',
  'Shape of You',
  'Perfect',
  'Yesterday',
  'Imagine'
];

const Search: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredSongs = songs.filter(song =>
    song.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: '32px 0',
            minHeight: '100vh',
          }}
        >
          <IonInput
            placeholder="Search for a song..."
            value={query}
            onIonChange={e => setQuery(e.detail.value!)}
            style={{ maxWidth: 350, marginBottom: 24 }}
            clearInput
          />
          <IonList style={{ width: '100%', maxWidth: 350 }}>
            {filteredSongs.length > 0 ? (
              filteredSongs.map(song => (
                <IonItem key={song}>
                  <IonLabel>{song}</IonLabel>
                </IonItem>
              ))
            ) : (
              <IonItem>
                <IonLabel>No songs found.</IonLabel>
              </IonItem>
            )}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;