import paramiko
from config import ROUTER_IP, USERNAME, PASSWORD


import paramiko
from config import ROUTER_IP, USERNAME, PASSWORD


def get_router_data_via_ssh(command, router_ip=ROUTER_IP, username=USERNAME, password=PASSWORD):
    try:
        print(f"Connecting to {router_ip} with user {username}...")
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(router_ip, username=username, password=password, timeout=10)
        print(f"✅ SSH connection successful!")

        print(f"Running command: {command}")
        stdin, stdout, stderr = ssh.exec_command(command)
        output = stdout.read().decode()
        ssh.close()
        print(f"✅ Command output received!")
        
        return output
    except Exception as e:
        print(f"❌ Error during SSH: {e}")
        return f"Error: {e}"

# Optional test code
# if __name__ == "__main__":
#     sample_command = "logread"  # Or use COMMANDS["log_output"]
#     result = get_router_data_via_ssh(sample_command)
#     print("Command Output:", result)
