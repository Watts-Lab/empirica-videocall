import { JitsiMeeting } from '@jitsi/react-sdk';
import React from "react";

export function VideoCall ({playerName, roomName}) {

    function handleJitsiIFrameRef (iframeRef) {
        iframeRef.style.border = '10px solid cadetblue';
        iframeRef.style.background = 'cadetblue';
        iframeRef.style.position = 'absolute'
        iframeRef.style.left = '10%';
        iframeRef.style.right = '10%';
        iframeRef.style.height = '80%';
        iframeRef.style.width = '80%';
    };

    return(
        <div>
            <JitsiMeeting
                domain="meet.jit.si"
                roomName={roomName}
                onApiReady={externalApi => {const api = externalApi}}
                getIFrameRef={handleJitsiIFrameRef}
                userInfo={{displayName: playerName}}
                configOverwrite={{  // options here: https://github.com/jitsi/jitsi-meet/blob/master/config.js
                    enableWelcomePage: false,  // this doesn't seem to be working...
                    readOnlyName: true,
                    toolbarButtons: ['camera', 'microphone'],
                    enableCalendarIntegration: false,
                }}
                interfaceConfigOverwrite={{
                    SHOW_CHROME_EXTENSION_BANNER: false,
                    SHOW_JITSI_WATERMARK: false,
                    MOBILE_APP_PROMO: false,  // Whether the mobile app Jitsi Meet is to be promoted to participants attempting to join a conference in a mobile Web browser.
                    
                }}
            />
        </div>
    )

}
