import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { URL_API } from "../../../config";
import { useAuth } from "../../providers/AuthContext";

const Dashboard = () => {
  const [data, setData] = useState();
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL_API}/dashboard/${token}`);
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Anamneses Mensais
      </Typography>

      <Box sx={{ height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data?.data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes_ano" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="quantidade" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
};

export default Dashboard;