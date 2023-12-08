import React, { useEffect, useState } from 'react';
import InformationCard from '../components/InformationCard';
import Button1 from '../components/Button1';
import { Link } from 'react-router-dom';
import Grid from '../components/Grid';

const ClothesList = () => {
    const [baju, setBaju] = useState([]);
    const { showMessage } = useMessageContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/pakaian/`, {
                    method: 'GET',
                    body: null,
                    headers: { "Content-Type": "application/json" }
                });
                const data = await response.json();
                setBaju(data?.data);

                // Assuming data is an array of objects
            } catch (error) {
                showMessage(error, "error");
                console.log('Error fetching data:', error);
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-full' style={{ maxHeight: '500px', overflowY: "auto" }}>
            <Grid rows={4} columns={3}>
                {baju &&
                    baju.map((baju) => (
                        <div key={baju.id} style={{ margin: "2rem" }}>
                            <InformationCard
                                key={baju.id}
                                data={
                                    <div>
                                        <p>Nama: {baju.nama}</p>
                                        <p>Harga: {baju.harga}</p>
                                        <p>Kategori: {baju.kategori}</p>
                                        <p>Stok: {baju.stok}</p>
                                        <img src={baju.image} />
                                    </div>
                                }
                                buttons={
                                    <Link to={`/detail/?id=${baju.id}`}>
                                        <Button1 text='Beli Sekarang' />
                                    </Link>
                                }
                            />
                        </div>
                    ))}
            </Grid>
        </div>
    );
};

export default ClothesList;
