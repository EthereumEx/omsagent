# OMS Geth Agent Data Collection
This is a quick capture of a way to get the OMS Agent to push data up to an OMS Workspace.


## Basic deployment.

1. Install OMS Agent
2. Put the `ethStats.js` and `runOmsScript.sh` file in `/home/azureuser/` path
3. Put the `exec-gethjson.conf` in `/etc/opt/microsoft/omsagent/conf/omsagent.d`
4. Restart the agent with `sudo /opt/microsoft/omsagent/bin/service_control restart`

## OMS AGent installation

See: [OMS Agent](https://github.com/Microsoft/OMS-Agent-for-Linux)

More detailed installation: [OMS Install](https://github.com/Microsoft/OMS-Agent-for-Linux/blob/OMSAgent-201702-v1.3.1-15/docs/OMS-Agent-for-Linux.md#steps-to-install-the-oms-agent-for-linux)

### Quick install.

Get your OMS Workspace ID and Key from your OMS Portal Settings:

https://WORKSPACENAME.portal.mms.microsoft.com/#Workspace/overview/settings/details/index

```
#!/usr/bin/env bash
OMSWORKSPACEID=<workspaceId>
OMSKEY=<workspaceKey>

wget https://raw.githubusercontent.com/Microsoft/OMS-Agent-for-Linux/master/installer/scripts/onboard_agent.sh && sh onboard_agent.sh -w $OMSWORKSPACEID -s $OMSKEY

```
## Script Deployment
Within the OMS deployment path, there is a path that contains `config.d` declarations.
The path `/etc/opt/microsoft/omsagent/conf/omsagent.d` is a symbolic link to `/etc/opt/microsoft/omsagent/<WORKSPACEID>/conf/omsagent.d`


### Script `exec-gethjson.d`
This file uses the symbolic link to a `workspaceId` path that OMS Agent creates.
The file `exec-gethjson.d` need to be placed in that directory.

This file assumes that `geth` is in the path.

```
<source>
  type exec
  command '/home/azureuser/runOmsScript.sh'
  format json
  tag oms.api.geth3
  run_interval 15s
</source>

<match oms.api.geth3>
  type out_oms_api
  log_level info

  buffer_chunk_limit 5m
  buffer_type file
  buffer_path /var/opt/microsoft/omsagent/state/out_oms_api_geth3*.buffer
  buffer_queue_limit 10
  flush_interval 20s
  retry_limit 10
  retry_wait 30s
</match>

```

Agent that runs alongside OMS and emits geth instance information


## Restart the agent

```
sudo /opt/microsoft/omsagent/bin/service_control restart
```
