<source>
  type exec
  command 'cat /home/azureuser/geth.json'
  format json
  tag oms.api.geth3
  run_interval 15s
</source>

<match oms.api.geth3>
  type out_oms_api
  log_level info

  buffer_chunk_limit 5m
  buffer_type file
  buffer_path /var/opt/microsoft/omsagent/ea3e1e8e-dc5d-4763-9a2e-1dda69043116/state/out_oms_api_geth3*.buffer
  buffer_queue_limit 10
  flush_interval 20s
  retry_limit 10
  retry_wait 30s
</match>
