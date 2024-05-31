'use client'

import { useEffect } from "react"


function setTab(tab : number) {
  document.querySelectorAll('.tab-content').forEach(function (tabContent) {
    tabContent.classList.add('hidden');
  });
  document.querySelector('#Tab' + tab)!.classList.remove('hidden');
}


type CodeExample = {
    label : string
    , code : string
  }

const codeExample : CodeExample[] = [
  {
    label : "Hello World"
    , code : "print \"hello world\""
  }
  , {
      label : "Static Site"
      , code : `import Servant
import Network.Wai.Handler.Warp (run)
import Network.HTTP.Types (status200)

run 8080 $
  \\_ respond -> respond $
    responseLBS status200 [("Content-Type", "text/html")] $
      "<h1>Hello World</h1>"`
  }
  , {
      label : "Web Client"
      , code : `import qualified Network.HTTP.Client as N
import qualified Network.HTTP.Client.TLS as N

vehicleFetch query =
  let
    url = "GET https://vpic.nhtsa.dot.gov/api/vehicles/" <> query
    request = N.setQueryString [("format", Just "json")] $ N.parseRequest_ url
    settings = N.tlsManagerSettings
  in do
    reqMgr <- N.newManager settings
    N.httpLbs request reqMgr

response <- vehicleFetch "getallmakes"`
  }
  , {
      label : "HTMX, WebSocket backend"
      , code : `streamHandler :: MonadIO m => Ws.Connection -> m ()
streamHandler conn = do
  liftIO $ Ws.withPingThread conn 30 (pure ()) $ do
    -- if you want to inspect streaming: liftIO $ Ws.sendTextData conn ("<div id=\"notifications\" hx-swap-oob=\"beforeend\">Some message</div?" :: ByteString)
    handleClient
  where
    handleClient = do
      rezA <- tryAny $ forever receiveStream
      case rezA of
        Left err -> do
          liftIO . putStrLn $ "@[streamHandler] situation: " <> show err
          closeConnection
        Right _ -> do
          liftIO $ putStrLn "@[streamHandler] client disconnected."
          pure ()

    receiveStream = do
      rezA <- Ws.receiveDataMessage conn
      case rezA of
        Ws.Text msg decodedMsg ->
          let
            hxMsg = eitherDecode msg :: Either String HxWsMessage
          in
          case hxMsg of
            Left err -> do
              putStrLn $ "@[receiveStream] invalid HxWsMessage: " <> (T.unpack . T.decodeUtf8 . LBS.toStrict) msg
              putStrLn $ "@[receiveStream] error: " <> show err
            Right hxMsg ->
              Ws.sendTextData conn $ H.renderHtml $ htmxReply hxMsg.wsMessage
        Ws.Binary msg ->
          putStrLn "@[receiveStream] received binary."

    closeConnection = do
      Ws.sendClose conn ("Bye" :: ByteString)
      void $ Ws.receiveDataMessage conn

    htmxReply aMessage =
      H.tbody H.! A.id "notifications" H.! X.hxSwapOob "beforeend" $ do
        H.tr $ do
          H.td H.! A.class_ "px-6 py-4 whitespace-nowrap text-sm text-slate-900" $ H.toHtml aMessage


data HxWsHeaders = HxWsHeaders {
    request :: T.Text
    , trigger :: T.Text
    , triggerName :: Maybe T.Text
    , target :: T.Text
    , currentURL :: T.Text
  }
  deriving stock (Show, Generic)

instance FromJSON HxWsHeaders where
  parseJSON (Object obj) = HxWsHeaders <$>
    obj .: "HX-Request"
    <*> obj .: "HX-Trigger"
    <*> obj .:? "HX-Trigger-Name"
    <*> obj .: "HX-Target"
    <*> obj .: "HX-Current-URL"


data HxWsMessage = HxWsMessage {
    wsMessage :: T.Text
    , headers :: HxWsHeaders
  }
  deriving (Show, Generic)


instance FromJSON HxWsMessage where
  parseJSON (Object obj) = HxWsMessage <$>
    obj .: "ws-message"
    <*> obj .: "HEADERS"`
  }
]

function CodeEditor_2() {

  useEffect(() => {
    setTab(1)
  }, [])


  return (
    <div className="p-4 text-black dark:text-white dark:bg-grey-800">
      <ul className="flex border-b">
      { codeExample.map(( { label, code }, id ) => {
            return (
              <li key={ id } className="mr-1">
                <button className="inline-block py-2 px-4 text-blue-500 hover:text-rose-800 font-semibold" onClick={ () => setTab(id + 1)}>
                  <span className="visible sm:invisible">{ id + 1 }</span>
                  <span className="invisible sm:visible">{label}</span>
                </button>
              </li>
              )
          })
        }
      </ul>

      <div className="p-3 max-h-80 overflow-auto">
      {
        codeExample.map(( { label, code }, id ) => {
            return (
              <div id={ "Tab" + (id + 1) } key={ id } className="tab-content">
                <pre><code className="language-haskell">{ code }</code></pre>
              </div>
            )
          })
      }

      </div>
    </div>
  )
}



export default function CodingExample() {
  return (<>
  <section className="pt-6 h-96">
    <CodeEditor_2 />
  </section>
  </>)
}