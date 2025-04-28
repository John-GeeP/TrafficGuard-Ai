import os
from dotenv import load_dotenv

load_dotenv()

ROUTER_IP = os.getenv("ROUTER_IP")
USERNAME = os.getenv("ROUTER_USERNAME")
PASSWORD = os.getenv("ROUTER_PASSWORD")

COMMANDS = {
    "cpu_usage": "top -bn1 | grep 'CPU:'",
    "memory_usage": "free",
    "wireless_clients": "iw dev wlan0 station dump",  # Replace as needed
    "firewall_rules": "iptables -L -v",
    "uptime_load": "uptime",
    "network_config": "ifconfig",
    "device_list": "cat /tmp/dhcp.leases",
    "log_output": "logread",
    "bandwidth": "cat /proc/net/dev"
}

DATABASE = "db/router_data.db"
