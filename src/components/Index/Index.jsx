import { useState, useEffect, useContext } from 'react';
import { Box, Card, Button } from '@mui/material';
import { craUI, craCore } from '@sistemas-cra/react-components';
import styles from './Index.module.less';

function Index() {
	const [msg, setMsg] = useState('Cargando...'),
		[loading, setLoading] = useState(true),
		[error, setError] = useState(null),
		ctx = useContext(craUI.UserContext) ?? {},
		{ user } = ctx,
		showMsg = useContext(craUI.MsgContext);

	console.log(CRA_CONFIG.APP_NAME);
	console.log(`${CRA_CONFIG.APP_TITLE} UserContext: ${user}}`);

	const ejToastInfo = () => craCore.toastMsg.info('Msg emergente temporal'),
		ejToasSuccess = () => craCore.toastMsg.success('Msg emergente temporal'),
		ejToastWarning = () => craCore.toastMsg.warning('Msg emergente temporal'),
		ejToastError = () => craCore.toastMsg.error('Msg emergente temporal'),
		ejConfirm = async () => {
			const res = await showMsg({
				title: '¿Estas seguro?',
				description: 'Ejemplo de confirmar.',
				acceptText: 'Confirmar',
				cancelText: 'Cancelar',
			});

			console.log('¿Usuario confirmó?', res);
		},
		ejAlert = async () => {
			const res = await showMsg({
				title: 'Mensaje',
				description: 'Ejemplo de alert.',
				acceptText: 'Aceptar',
			});

			console.log('¿Alerta?', res);
		};

	useEffect(() => {
		(async () => {
			// lamar a /hello-world
			const res = await craCore.axiosInstance(`${craCore.CONFIG.API_PATH}/hello-world`),
				_msg = res?.data?.message;
			if (_msg) setMsg(_msg);
			else setError({ error: `BackEnd ${craCore.CONFIG.API_PATH}/hello-world no responde` });
			setLoading(false);
		})();
	}, []);

	if (loading) return <craUI.Loading />;
	if (error) return <craUI.ErrorMsg>Acceso restringido</craUI.ErrorMsg>;

	return (
		<Box className={styles.wrapper}>
			<Card
				className={styles.card}
				elevation={3}
			>
				{msg}
				<box className={styles.boxButtons}>
					<Button
						type='button'
						className={styles.buttonAlert}
						onClick={ejConfirm}
					>
						ej Confirmación
					</Button>
					<Button
						type='button'
						className={styles.buttonAlert}
						onClick={ejAlert}
					>
						ej alert
					</Button>
				</box>
				<box className='boxButtons'>
					<Button
						type='button'
						className={styles.buttonToast}
						onClick={ejToastInfo}
					>
						ej toast Info
					</Button>
					<Button
						type='button'
						className={styles.buttonToast}
						onClick={ejToasSuccess}
					>
						ej toast Success
					</Button>
					<Button
						type='button'
						className={styles.buttonToast}
						onClick={ejToastWarning}
					>
						ej Toast Warning
					</Button>
					<Button
						type='button'
						className={styles.buttonToast}
						onClick={ejToastError}
					>
						ej toast Error
					</Button>
				</box>
			</Card>
		</Box>
	);
}

export default Index;
