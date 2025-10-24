import { useEffect, useState } from 'react';
import supabase from '../supabase-client';

const AdminDealJackets = () => {
  const [file, setFile] = useState<any>(null);
  const [rows, setRows] = useState<any>();

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  const handleFileChange = (event: any) => {
    console.log(event.target.files);
    setFile(event.target.files[0]);
  };

  const uploadInventory = async (event: any) => {
    event.preventDefault();
    console.log(event.target);

    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch('http://localhost:8000/uploadfile/', {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      body: formData,
    });
    return await response.json();
  };

  async function loadInventory() {
    const { data, error } = await supabase.from('inventory').select(`make,
    model,
    mileage,
    price
    `);

    setRows(data);
  }

  useEffect(() => {}, []);

  return <>Put here</>;
};

export default AdminDealJackets;
