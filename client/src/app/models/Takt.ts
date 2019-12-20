export default class Takt {

    timer: number = 0;
    stopTime: number = 0;
    stopTimeString: string = '00:00';
    timeString: string = '00:00';
    isStopTime: boolean = false;
    directRun: number = 0;
    directRunGeral: number = 0;
    andonMessage: string = '';
    screenColor: number = 0;
    produced: number = 0;
    objective: number = 0;
    balance: number = 0;
    accumulated: number = 0;
    themes: Array<string> = [
        'white'
        , 'black'
        , 'andon'
        , 'stop-plan'
        , 'stop-time'
    ]

}


// ANDON
// <add key="Multicast_Port" value="2225"/>
// <FrameDataSection taktOffset="270">
// <add name="PLC_TIMER" pos="40" len="4" type="TIME"/>
// <add name="PPLAN_REM_TIME" pos="46" len="4" type="TIME"/>
// <add name="COLOR_STATUS" pos="50" len="2" type="INT"/>
// <add name="PLC_SYS_CLK" pos="52" len="4" type="TIME"/>
// <add name="ANDON_MESSAGE" pos="56" len="32" type="S7-STRING"/>


// TAKT BIG
// <add key="Multicast_Port" value="2222"/>
// <FrameDataSection taktOffset="94">
// <add name="PLC_ACCUMULATED" pos="0" len="4" type="DINT"/>
// <add name="PLC_DIRECTRUN" pos="4" len="4" type="FLOAT"/>
// <add name="PLC_OBJECTIVE" pos="8" len="2" type="INT"/>
// <add name="PLC_OVERBALANCE" pos="10" len="4" type="DINT"/>
// <add name="PLC_PRODUCTION" pos="14" len="2" type="INT"/>
// <add name="PLC_STOPTIME" pos="16" len="4" type="UTIME"/>
// <add name="PLC_STOPTIMEPERC" pos="20" len="4" type="FLOAT"/>
// <add name="PLC_TIMER" pos="24" len="4" type="TIME"/>
// <add name="PLC_ANDON_BUZZERFLAG" pos="28" len="1" type="BYTE" bit="0"/>
// <add name="PLC_TAKT_BUZZERFLAG" pos="28" len="1" type="BYTE" bit="1"/>
// <add name="LimitStopTime_1" pos="40" len="4" type="UTIME"/>
// <add name="LimitSaldoTurno_1" pos="44" len="2" type="INT"/>
// <add name="LimitDirectRunGeral_1" pos="46" len="2" type="INT"/>
// <add name="LimitDirectRunChassis_1" pos="48" len="2" type="INT"/>
// <add name="LimitStopTime_2" pos="50" len="4" type="UTIME"/>
// <add name="LimitSaldoTurno_2" pos="54" len="2" type="INT"/>
// <add name="LimitDirectRunGeral_2" pos="56" len="2" type="INT"/>
// <add name="LimitDirectRunChassis_2" pos="58" len="2" type="INT"/>
// <add name="LimitStopTime_3" pos="60" len="4" type="UTIME"/>
// <add name="LimitSaldoTurno_3" pos="64" len="2" type="INT"/>
// <add name="LimitDirectRunGeral_3" pos="66" len="2" type="INT"/>
// <add name="LimitDirectRunChassis_3" pos="68" len="2" type="INT"/>
// <add name="CurrentShift" pos="70" len="2" type="INT"/>
// <add name="PPLAN_REM_TIME" pos="30" len="4" type="TIME"/>




