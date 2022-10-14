import {
  Typography,
  Box,
  Switch,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import { Icon } from '@iconify/react';
import CountUp from 'react-countup';
import palette from '../../theme/palette';
import { DataGrid } from '@mui/x-data-grid';

import * as S from '../adminDashboard/adminDashboard.styles';

const DeliveryDashboard = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'User Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'orderDate', headerName: 'OrderDate', width: 250 },
    { field: 'isDelivered', headerName: 'Delievered?', width: 150 },
    {
      field: 'details',
      headerName: 'Details',
      width: 100,
      renderCell: (params) => {
        return (
          <IconButton onClick={() => {}}>
            <Icon icon="bx:link-external" />
          </IconButton>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      name: 'test',
      orderDate: '14/08/2022',
      email: 'test@gmail.com',
      isDelivered: false,
    },
    {
      id: 1,
      name: 'test',
      orderDate: '14/08/2022',
      email: 'test@gmail.com',
      isDelivered: false,
    },

    {
      id: 1,
      name: 'test',
      orderDate: '14/08/2022',
      email: 'test@gmail.com',
      isDelivered: false,
    },
    {
      id: 1,
      name: 'test',
      orderDate: '14/08/2022',
      email: 'test@gmail.com',
      isDelivered: false,
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box></Box>
        <CustomButton children="Scan QR Code " />
      </Box>

      <S.StatsContainer>
        <S.StatCard>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Icon
              icon="fluent:tasks-app-28-filled"
              width="30px"
              height="30px"
              color={palette.primary}
            />
            <Icon icon="entypo:circular-graph" width="30px" height="30px" />
          </Box>
          <Typography sx={{ fontSize: '2em', fontWeight: 700 }}>
            <CountUp end={28} duration={1} />
          </Typography>
          <Typography sx={{ fontWeight: 600, color: palette.primary }}>
            Books delivered
          </Typography>
        </S.StatCard>

        <S.StatCard>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Icon
              icon="fluent:tasks-app-28-filled"
              width="30px"
              height="30px"
              color={palette.primary}
            />
            <Icon icon="entypo:circular-graph" width="30px" height="30px" />
          </Box>
          <Typography sx={{ fontSize: '2em', fontWeight: 700 }}>
            <CountUp end={28} duration={1} />
          </Typography>
          <Typography sx={{ fontWeight: 600, color: palette.primary }}>
            Books yet to be delivered
          </Typography>
        </S.StatCard>
      </S.StatsContainer>
      <S.TableContainer>
        <Typography sx={{ fontSize: '1.2em', fontWeight: 700 }}>
          Quick Access
        </Typography>
        <S.InputsContainer></S.InputsContainer>
        <S.DataGridContainer>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            sx={{
              backgroundColor: '#fff',
              border: 'none',
              borderRadius: '20px',
              boxShadow: palette.shadow,
              padding: '15px',
              width: '80%',
            }}
            autoHeight
          />
        </S.DataGridContainer>
      </S.TableContainer>
    </Box>
  );
};
export default DeliveryDashboard;
