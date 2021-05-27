import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';


const ChatFeed= (props) => {
    // console.log(props);
    const {chats, activeChat, userName, messages} = props;

    //c c , if chat existes then find activechat

    // console.log(chat, userName, messages);
 const chat = chats && chats[activeChat];


 const renderReadReceipts = (message, isMyMessage) => {
     return chat.people.map ((person, index)=> person.last_read === message.id && (
         <div 
                key= {`read_${index}`}
                className="read-receipt"
                style={{
                    float: isMyMessage ? 'right' : 'left',
                    backgroundImage: `url(${person?.person?.avatar})`
                
                 } }
         />
     ) )
 }

    const renderMessages = () => {
        const keys = Object.keys(messages);

        // console.log(keys);
        return keys.map((key, index)=>{
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index-1];
            const isMyMessage = userName === message.sender.userName;

            return(
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                    {
                        isMyMessage
                        ? <MyMessage message={message}/>
                        : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                    }

                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                          {/* read-receipts */}
                          {renderReadReceipts(message, isMyMessage)}
                    </div>
                    </div>

                </div>
            );
        })
    }
    // renderMessages()

    if(!chat) return 'Loading...';

    return(
        <div className="chat-feed">
            {/* ChatFeed */}
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.userName}`)}
                </div>
            </div>
            { renderMessages()}

            <div style={{ height: '100px'}}/>
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );

}

export default ChatFeed;