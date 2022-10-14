import {
  Typography,
  Box,
  Switch,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import Modal from '@mui/material/Modal';
import React, { useState, useEffect } from 'react';
import { MainPage } from '../../globals/styles';
import { Icon } from '@iconify/react';
import * as S from './adminDashboard.styles';
import palette from '../../theme/palette';
import { DataGrid } from '@mui/x-data-grid';
import CountUp from 'react-countup';
import CSVModal from '../../components/CSVParser/CSVModal.component';

const AdminDashboard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  const { breakpoints } = useTheme();

  return (
    <MainPage>
      <CSVModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <S.DashboardContainer>
        <Typography
          sx={{
            fontSize: '2em',
            letterSpacing: '2px',
            fontWeight: 600,
            [breakpoints.down('md')]: { fontSize: '1.5em' },
          }}
        >
          BookMyBook admin console
        </Typography>
        <S.DashboardRow>
          <S.DashboardLeft>
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
                    icon="fluent:people-team-16-filled"
                    width="30px"
                    height="30px"
                    color={palette.primary}
                  />
                  <Icon
                    icon="entypo:circular-graph"
                    width="30px"
                    height="30px"
                  />
                </Box>
                <Typography sx={{ fontSize: '2em', fontWeight: 700 }}>
                  <CountUp end={28} duration={1} />
                </Typography>
                <Typography sx={{ fontWeight: 600, color: palette.primary }}>
                  Books rented
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
                  <Icon
                    icon="entypo:circular-graph"
                    width="30px"
                    height="30px"
                  />
                </Box>
                <Typography sx={{ fontSize: '2em', fontWeight: 700 }}>
                  <CountUp end={28} duration={1} />
                </Typography>
                <Typography sx={{ fontWeight: 600, color: palette.primary }}>
                  Books available
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
                  }}
                  autoHeight
                />
              </S.DataGridContainer>
            </S.TableContainer>
          </S.DashboardLeft>
          <S.DashboardRight>
            <S.ActionBarContainer>
              <Typography sx={{ fontSize: '1.2em', fontWeight: 700 }}>
                Actions Bar
              </Typography>
              <S.ActionBarItem>
                <Icon
                  icon="wpf:add-user"
                  width="35px"
                  height="35px"
                  color={palette.primary}
                />
                <Box sx={{ width: '70%' }}>
                  <Typography sx={{ fontSize: '0.9em', fontWeight: 600 }}>
                    ADD A BOOK
                  </Typography>
                  <Typography
                    sx={{ fontSize: '0.65em', color: 'gray' }}
                    className="subtitle"
                  >
                    Add a single book to the library
                  </Typography>
                </Box>
              </S.ActionBarItem>
              <S.ActionBarItem onClick={(e) => handleOpen()}>
                <Icon
                  icon="fluent:people-team-16-filled"
                  width="35px"
                  height="35px"
                  color={palette.primary}
                />
                <Box sx={{ width: '70%' }}>
                  <Typography sx={{ fontSize: '0.9em', fontWeight: 600 }}>
                    EXCEL IMPORT
                  </Typography>
                  <Typography
                    sx={{ fontSize: '0.65em', color: 'gray' }}
                    className="subtitle"
                  >
                    Add books from excel sheet to the library
                  </Typography>
                </Box>
              </S.ActionBarItem>
            </S.ActionBarContainer>
          </S.DashboardRight>
        </S.DashboardRow>
      </S.DashboardContainer>
    </MainPage>
  );
};

export default AdminDashboard;
