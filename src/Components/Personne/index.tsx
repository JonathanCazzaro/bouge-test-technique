import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fetchData from '../../DataFetching/fetchData';
import PageTitle from '../PageTitle';
import Data from './Data';

const Personne: React.VFC = () => {
  const [search, setSearch] = useState('');
  const [gender, setGender] = useState<Gender>('' as Gender.BOTH);
  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    fetchData().then((persons) => {
      if (persons) setData(persons);
    });
  }, []);

  return (
    <>
      <PageTitle title="Personne" />
      <Data
        search={search}
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
        data={data
          .filter((person) => {
            switch (gender) {
              case 'female':
              case 'male':
                if (person.gender === gender) return person;
                break;
              case '':
                return person;
            }
          })
          .filter((person) => {
            if (
              `${person.firstname} ${person.lastname}`
                .toLowerCase()
                .includes(search.toLowerCase())
            )
              return person;
          })}
      />
    </>
  );
};

export default Personne;
