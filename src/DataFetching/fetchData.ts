import axios from 'axios';

const fetchData = async (): Promise<Person[] | undefined> => {
  try {
    const {
      data: { data },
    }: AwaitedResponse = await axios.get(
      'https://fakerapi.it/api/v1/persons?_quantity=50'
    );
    const parsedData: Person[] = data.map((person) => {
      const { firstname, lastname, gender, email, id } = person;
      return { firstname, lastname, gender, email, id };
    });
    return parsedData;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
